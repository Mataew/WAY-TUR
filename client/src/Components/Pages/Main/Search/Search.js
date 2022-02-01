import React from "react";
import styles from "./search.module.css";
import fon from "../../../../assets/search_fon.png";
import { useState } from "react";
import { useEffect } from "react";
import { GetTurs } from "../../../../redux/features/searchReducer";
import { GetByTur } from "../../../../redux/features/turDesk";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const turs = useSelector((state) => state.turReducer.turs);

  const [from, setFrom] = useState("");

  const [to, setTo] = useState("");

  const [data, setData] = useState("");

  const [night, setNight] = useState("");

  const [people, setPeople] = useState("");

  const [inputTurs, setinputTurs] = useState();

  const [err, setErr] = useState("");
  

  const search = () => {
    const filtur = turs.filter((tur) => {
      return (
        tur.from.toLowerCase().includes(from.toLowerCase()) &&
        tur.to.toLowerCase().includes(to.toLowerCase()) &&
        String(tur.night).includes(night) &&
        tur.data.toLowerCase().includes(data.toLowerCase()) &&
        String(tur.amount).includes(people)
      );
    });
    console.log(filtur);
    setinputTurs(filtur ? filtur : "");
    setErr(filtur.length !== 0 ? "" : <div className={styles.empty}><h1>Ничего не найдено</h1></div>)
  };

  const GetByTurs = (id) => {
    dispatch(GetByTur(id));
  };

  const filteredTurs = !inputTurs ? turs : inputTurs;
  
  const e = err

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTurs());
  }, [dispatch]);
  return (
    <div
      className={styles.search_main}
      style={{ backgroundImage: `url("${fon}")` }}
    >
      <div className={styles.Search_main_Block}>
        <div className={styles.search_input}>
          <div className={styles.search_m}>
            <div className={styles.titles}>
              <h3 className={styles.search_titleTwo}>ОТКУДА</h3>
              <h3 className={styles.search_titleThree}>КУДА</h3>
              <h3 className={styles.search_titleFour}>ДАТА ВЫЛЕТА</h3>
              <h3 className={styles.search_titleFive}>НОЧЕЙ</h3>
              <h3 className={styles.search_titleSix}>ЧЕЛОВЕК</h3>
            </div>
            <div className={styles.search_inp}>
              <input
                className={styles.search_inputTwo}
                type="text"
                list="fromCities"
                placeholder="ИЗ КАКОГО ГОРОДА..."
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
              <datalist id="fromCities">
                { turs.map((item) => {
                  return (
                    <option value={ item.from } />
                  )
                })}
              </datalist>


              <input
                className={styles.search_inputThree}
                type="text"
                list="toCities"
                placeholder="В КАКОЙ ГОРОД..."
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
              <datalist id="toCities">
                { turs.map((item) => {
                  return (
                    <option value={ item.to } />
                  )
                })}
              </datalist>

              <input
                className={styles.search_inputFour}
                list="data"
                placeholder="ДАТА"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <datalist id="data">
                { turs.map((item) => {
                  return  (
                    <option value={item.data}/>
                  )
                })}
              </datalist>

              <input
                className={styles.search_inputFive}
                type="number"
                placeholder="КОЛ-ВО"
                value={night}
                onChange={(e) => setNight(e.target.value)}
              />

              <input
                className={styles.search_inputSix}
                type="number"
                placeholder="КОЛ-ВО"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={styles.Search_btn_block}>
          <button
            className={styles.search_btn}
            onClick={search}
            disabled={!from && !to && !data && !night && !people}
          >
            <h1> Поиск</h1>
          </button>
        </div>
      </div>
      <div className={styles.tur_name}>
        {filteredTurs.map((item, index) => {
          return (
            <div className={styles.search_imgBlock}>
              <div className={styles.tours_cards_wrapper}>
                <img
                  className={styles.tur_img}
                  src={`/${item.img}`}
                  alt="daun"
                />
              </div>
              <div className={styles.absolute_display}>
                <Link
                    className={styles.absolute_display_link}
                  to={`/hotels/${item._id}`}

                  onClick={() => GetByTurs(item._id)}
                >
                  {item.to}

                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {e}
    </div>
  );
};

export default Search;
