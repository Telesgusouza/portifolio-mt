import * as Styled from "./styled";

// import icon from "../../assets/icons/iconM_6.png";
import Reveal from "../Reveal";
import { useEffect, useState } from "react";
import Hr from "../Hr";
import {
  DocumentData,
  Query,
  collection,
  endBefore,
  getDocs,
  limit,
  orderBy,
  query,
  startAt,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase/firebase";
import { IDesign } from "../../config/interface";

interface INextDesing {
  currentPage: number;
  countNumPages: number[];
  listObjects: DocumentData[];
}

export default function MyWorks() {
  const [showDesign, setShowDesign] = useState(false);
  const [listFilters, setListFilters] = useState<string[]>([]);
  const [currentOptionFilter, setCurrentOptionFilter] =
    useState<string>("Todos");
  const [lastVisible, setLastVisible] = useState<DocumentData>();
  const [nextDesigns, setNextDesigns] = useState<INextDesing>({
    currentPage: 1,
    countNumPages: [],
    listObjects: [],
  });

  const [listDesings, setListDesings] = useState<
    [IDesign[], IDesign[], IDesign[]] | null
  >(null);
  const [currentData, setCurrentData] = useState<IDesign>();

  useEffect(() => {
    async function getListFilter() {
      try {
        const getList = await getDocs(collection(db, "/data/mt/filters"));
        const list: string[] = [];
        getList.docs.forEach((doc: DocumentData) => {
          list.push(doc.data().filter);
        });
        setListFilters(list);
      } catch (e) {
        console.error("Error ", e);
      }
    }

    getDataDesign();
    getListFilter();
  }, []);

  async function getPagination(q: Query<unknown, DocumentData>) {
    try {
      const countSnapshot = await getDocs(q);
      const totalDocuments = countSnapshot.size;
      const totalPages = Math.ceil(totalDocuments / 9);

      const obj: INextDesing = {
        currentPage: 1,
        countNumPages: [],
        listObjects: [],
      };

      for (let i = 1; i <= totalPages; i++) {
        obj.countNumPages.push(i);

        obj.listObjects.push(
          countSnapshot.docChanges()[i === 1 ? 0 : (i - 1) * 9 - 1].doc
        );
      }
      setNextDesigns(obj);
    } catch (e) {
      console.error("Error ", e);
    }
  }

  async function getData(q: Query<unknown, DocumentData>) {
    try {
      const getDesigns = await getDocs(q);

      let count = 1;
      const list1: IDesign[] = [];
      const list2: IDesign[] = [];
      const list3: IDesign[] = [];

      setLastVisible(getDesigns.docs[getDesigns.docs.length - 1]);

      getDesigns.docChanges().forEach((doc: DocumentData) => {
        const field: DocumentData = doc.doc.data();

        const obj: IDesign = {
          id: doc.doc.id,
          date: new Date(),

          title: field.title,
          decription: field.decription,

          design: field.design,
          filter: field.filter,
        };

        switch (count) {
          case 1: {
            list1.push(obj);
            break;
          }

          case 2: {
            list2.push(obj);
            break;
          }

          case 3: {
            list3.push(obj);
            count = 0;
            break;
          }
        }
        count++;
      });

      setListDesings([list1, list2, list3]);
    } catch (e) {
      console.error("Error ", e);
    }
  }

  async function getDataDesign() {
    try {
      const collectionRef = collection(db, "/design/mt/data");
      const q = query(
        collectionRef,
        where("date", ">", new Date("2024-01-01")),
        limit(9),
        orderBy("date", "desc")
      );

      await getData(q);
      await getPagination(
        query(
          collectionRef,
          where("date", ">", new Date("2024-01-01")),
          orderBy("date", "desc")
        )
      );

      setCurrentOptionFilter("Todos");
    } catch (e) {
      console.error("Error ", e);
    }
  }

  function handleViewDesing(data: IDesign) {
    setShowDesign(true);
    setCurrentData(data);
  }

  async function filterDesings(filter: string) {
    try {
      const collectionRef = collection(db, "/design/mt/data");
      const q = query(collectionRef, limit(9), where("filter", "==", filter));

      await getData(q);

      await getPagination(query(collectionRef, where("filter", "==", filter)));
      setCurrentOptionFilter(filter);
    } catch (e) {
      console.error("Error ", e);
    }
  }

  async function nextBackPage(page: string, numPage: number = 1) {
    try {
      const collectionRef = collection(db, "/design/mt/data");

      switch (page) {
        case "BACK": {
          if (nextDesigns.currentPage !== 1) {
            let q;
            if (currentOptionFilter !== "Todos") {
              q = query(
                collectionRef,
                where("filter", "==", currentOptionFilter),
                endBefore(lastVisible),
                limit(9)
              );
            } else {
              q = query(
                collectionRef,
                orderBy("date", "desc"),

                endBefore(lastVisible),
                limit(9)
              );
            }

            await getData(q);

            const obj = nextDesigns;
            nextDesigns.currentPage--;
            setNextDesigns(obj);
          }

          break;
        }

        case "NEXT": {
          if (
            nextDesigns.currentPage !==
            nextDesigns.countNumPages[nextDesigns.countNumPages.length - 1]
          ) {
            let q;
            if (currentOptionFilter !== "Todos") {
              q = query(
                collectionRef,
                where("filter", "==", currentOptionFilter),
                startAt(lastVisible),
                limit(9)
              );
            } else {
              q = query(
                collectionRef,
                orderBy("date", "desc"),

                startAt(lastVisible),
                limit(9)
              );
            }

            await getData(q);

            const obj = nextDesigns;
            nextDesigns.currentPage++;
            setNextDesigns(obj);
          }
          break;
        }

        case "PAGE": {
          let q;
          if (currentOptionFilter !== "Todos") {
            console.log("CHEGUEI FOI AQUI");

            q = query(
              collectionRef,
              where("filter", "==", currentOptionFilter),
              startAt(nextDesigns.listObjects[numPage - 1]),
              limit(9)
            );
          } else {
            console.log("DEVERIA ESTAR AQUI NÃO É MESMO");
            q = query(
              collectionRef,
              orderBy("date", "desc"),

              startAt(nextDesigns.listObjects[numPage - 1]),
              limit(9)
            );
          }

          const obj = nextDesigns;
          nextDesigns.currentPage = numPage;
          setNextDesigns(obj);

          await getData(q);

          break;
        }
      }
    } catch (e) {
      console.error("Error ", e);
    }
  }

  console.log(currentData);

  return (
    <Styled.Container className="box" id="works">
      <Hr />

      {showDesign && (
        <Styled.ShowDesign>
          <Styled.ContainerButton>
            <button onClick={() => setShowDesign(false)}>Voltar</button>
          </Styled.ContainerButton>

          <Reveal duration={0.2}>
            <Styled.ShowDesignContent>
              {currentData?.design && (
                <img src={currentData?.design} alt="design" />
              )}

              <div>
                <h4>{currentData?.title}</h4>
                <p>
                  {currentData?.decription}
                </p>
              </div>
            </Styled.ShowDesignContent>
          </Reveal>
        </Styled.ShowDesign>
      )}

      <Styled.Filters>
        <ul>
          <li onClick={getDataDesign}>todos</li>
          {listFilters.map((resp) => (
            <li onClick={() => filterDesings(resp)} key={resp}>
              {resp}
            </li>
          ))}
        </ul>
      </Styled.Filters>
      <h4>{currentOptionFilter}</h4>

      {listDesings === null && (
        <Styled.LoadingContainer>
          <div />
          <div />
          <div />
        </Styled.LoadingContainer>
      )}

      {listDesings !== null && listDesings[0].length == 0 && (
        <>
          <strong>Sem designs no momentos</strong>
        </>
      )}

      <Styled.ContainerWorks>
        {listDesings &&
          listDesings.length > 0 &&
          listDesings.map((resp, index) => (
            <ul key={index}>
              {resp.map((respDoc: IDesign) => (
                <Reveal
                  initialY={50}
                  delay={0.1}
                  duration={0.3}
                  key={respDoc.id}
                >
                  <li onClick={() => handleViewDesing(respDoc)}>
                    {respDoc.design !== null && (
                      <>
                        <img src={respDoc.design} alt="design" />
                      </>
                    )}
                  </li>
                </Reveal>
              ))}
            </ul>
          ))}
      </Styled.ContainerWorks>

      <Styled.ForwardOrBack>
        <ul>
          {nextDesigns.countNumPages.length > 0 && (
            <>
              {nextDesigns.countNumPages.length > 1 && (
                <Styled.LiPage onClick={() => nextBackPage("BACK")}>
                  Voltar
                </Styled.LiPage>
              )}

              {nextDesigns.countNumPages.map((count) => (
                <Styled.LiPage
                  onClick={() => nextBackPage("PAGE", count)}
                  selected={nextDesigns.currentPage == count}
                  key={count}
                >
                  {count}
                </Styled.LiPage>
              ))}
              {nextDesigns.countNumPages.length > 1 && (
                <Styled.LiPage onClick={() => nextBackPage("NEXT")}>
                  Próximo
                </Styled.LiPage>
              )}
            </>
          )}
        </ul>
      </Styled.ForwardOrBack>
    </Styled.Container>
  );
}
