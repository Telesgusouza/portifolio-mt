import * as Styled from "./styled";

// import icon from "../../assets/icons/iconM_6.png";
import Reveal from "../Reveal";
import { useEffect, useState } from "react";
import Hr from "../Hr";
import {
  DocumentData,
  Query,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase/firebase";
import { IDesign } from "../../config/interface";

interface INextDesing {
  countNumPages: number[];
  listObjects: DocumentData[];
}

export default function MyWorks() {
  const [showDesign, setShowDesign] = useState(false);
  const [listFilters, setListFilters] = useState<string[]>([]);
  // const [currentOptionFilter, setCurrentOptionFilter] = useState<string>("");
  const [lastVisible, setLastVisible] = useState<DocumentData>();
  const [nextDesigns, setNextDesigns] = useState<INextDesing>({
    countNumPages: [],
    listObjects: [],
  });

  const [listDesings, setListDesings] = useState<
    [IDesign[], IDesign[], IDesign[]]
  >([[], [], []]);
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

    async function getPagination() {
      try {
        const collectionRef = collection(db, "/design/mt/data");

        const countQuery = query(collectionRef);
        const countSnapshot = await getDocs(countQuery);
        const totalDocuments = countSnapshot.size;
        const totalPages = Math.ceil(totalDocuments / 9);

        const obj: INextDesing = {
          countNumPages: [],
          listObjects: [],
        };

        for (let i = 1; i <= totalPages; i++) {
          obj.countNumPages.push(i);
          obj.listObjects.push(countSnapshot.docChanges()[i - 1]);
        }

        setNextDesigns(obj);
      } catch (e) {
        console.error("Error ", e);
      }
    }

    getPagination();
    getDataDesign();
    getListFilter();
  }, []);

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
        orderBy("date")
      );

      await getData(q);
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
      const q = query(collectionRef, where("filter", "==", filter));

      await getData(q);
    } catch (e) {
      console.error("Error ", e);
    }
  }

  async function nextPage() {
    try {
      const collectionRef = collection(db, "/design/mt/data");
      const q = query(
        collectionRef,
        orderBy("date"),
        startAfter(lastVisible),
        limit(9)
      );

      await getData(q);
    } catch (e) {
      console.error("Error ", e);
    }
  }

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
                <h4>titulo</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quis deleniti expedita aut esse. Ratione voluptates placeat
                  quae nemo quis necessitatibus eligendi, esse unde dignissimos
                  nostrum voluptatum consequatur aperiam voluptas voluptatibus
                  dolor illum maxime non sapiente. Necessitatibus officia
                  perferendis dignissimos?
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
            <>
              <li onClick={() => filterDesings(resp)}>{resp}</li>
            </>
          ))}
        </ul>
      </Styled.Filters>
      <h4>todos</h4>

      <Styled.ContainerWorks>
        {listDesings.map((resp) => (
          <ul>
            {resp.map((respDoc: IDesign) => (
              <Reveal initialY={50} delay={0.1} duration={0.3}>
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
              <li onClick={nextPage}>Voltar</li>
              {nextDesigns.countNumPages.map((count) => (
                <>
                  <li>{count}</li>
                </>
              ))}
              <li onClick={nextPage}>Próximo</li>
            </>
          )}
        </ul>
      </Styled.ForwardOrBack>
    </Styled.Container>
  );
}
