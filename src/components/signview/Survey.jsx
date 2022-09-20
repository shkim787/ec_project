import React, { useState, useEffect } from "react";

const Survey = ({ Q, i, selectedValues, setSelectedValues }) => {
  const [isClicked, setIsClicked] = useState({
    q1: Array(2).fill(false),
    q2: Array(16).fill(false),
    q3: Array(2).fill(false),
    q4: Array(4).fill(false),
    q5: Array(1).fill(false),
    q6: Array(4).fill(false),
  });

  const checkInvalid = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = Number(val).toLocaleString("ko-KR") + "원";
  };

  const onChange = (prop, i) => (e) => {
    if (prop === "q5") checkInvalid(e);
    setSelectedValues({
      ...selectedValues,
      [prop]: e.target.value.replace(/[, 원]/gi, ""),
    });
    let tmpArr = Array(isClicked[prop].length).fill(false);
    tmpArr[i] = true;
    setIsClicked({ ...isClicked, [prop]: tmpArr });
    console.log(selectedValues);
  };

  const setArticle = () => {
    switch (i) {
      case 0:
        return (
          <>
            <button
              className={isClicked.q1[0] ? "on" : ""}
              onClick={onChange("q1", 0)}
              value="true"
            >
              예
            </button>
            <button
              className={isClicked.q1[1] ? "on" : ""}
              onClick={onChange("q1", 1)}
              value="false"
            >
              아니오
            </button>
          </>
        );
      case 1:
        return (
          <>
            <div>지역을 선택해 주세요</div>
            <div>
              <div>
                <button
                  className={isClicked.q2[0] ? "on" : ""}
                  onClick={onChange("q2", 0)}
                  value="서울특별시"
                >
                  서울특별시
                </button>
                <button
                  className={isClicked.q2[1] ? "on" : ""}
                  onClick={onChange("q2", 1)}
                  value="경기도"
                >
                  경기도
                </button>
              </div>
              <div>
                <button
                  className={isClicked.q2[2] ? "on" : ""}
                  onClick={onChange("q2", 2)}
                  value="강원도"
                >
                  강원도
                </button>
                <button
                  className={isClicked.q2[3] ? "on" : ""}
                  onClick={onChange("q2", 3)}
                  value="충청북도"
                >
                  충청북도
                </button>
              </div>
              <div>
                <button
                  className={isClicked.q2[4] ? "on" : ""}
                  onClick={onChange("q2", 4)}
                  value="충청남도"
                >
                  충청남도
                </button>
                <button
                  className={isClicked.q2[5] ? "on" : ""}
                  onClick={onChange("q2", 5)}
                  value="대전광역시"
                >
                  대전광역시
                </button>
              </div>
              <div>
                <button
                  className={isClicked.q2[6] ? "on" : ""}
                  onClick={onChange("q2", 6)}
                  value="세종특별자치시"
                >
                  세종특별자치시
                </button>
                <button
                  className={isClicked.q2[7] ? "on" : ""}
                  onClick={onChange("q2", 7)}
                  value="전라북도"
                >
                  전라북도
                </button>
              </div>
              <div>
                <button
                  className={isClicked.q2[8] ? "on" : ""}
                  onClick={onChange("q2", 8)}
                  value="전라남도"
                >
                  전라남도
                </button>
                <button
                  className={isClicked.q2[9] ? "on" : ""}
                  onClick={onChange("q2", 9)}
                  value="광주광역시"
                >
                  광주광역시
                </button>
              </div>
              <div>
                <button
                  className={isClicked.q2[10] ? "on" : ""}
                  onClick={onChange("q2", 10)}
                  value="경상북도"
                >
                  경상북도
                </button>
                <button
                  className={isClicked.q2[11] ? "on" : ""}
                  onClick={onChange("q2", 11)}
                  value="경상남도"
                >
                  경상남도
                </button>
              </div>
              <div>
                <button
                  className={isClicked.q2[12] ? "on" : ""}
                  onClick={onChange("q2", 12)}
                  value="부산광역시"
                >
                  부산광역시
                </button>
                <button
                  className={isClicked.q2[13] ? "on" : ""}
                  onClick={onChange("q2", 13)}
                  value="대구광역시"
                >
                  대구광역시
                </button>
              </div>
              <div>
                <button
                  className={isClicked.q2[14] ? "on" : ""}
                  onClick={onChange("q2", 14)}
                  value="울산광역시"
                >
                  울산광역시
                </button>
                <button
                  className={isClicked.q2[15] ? "on" : ""}
                  onClick={onChange("q2", 15)}
                  value="제주특별자치도"
                >
                  제주특별자치도
                </button>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <button
              className={isClicked.q3[0] ? "on" : ""}
              onClick={onChange("q3", 0)}
              value="true"
            >
              예
            </button>
            <button
              className={isClicked.q3[1] ? "on" : ""}
              onClick={onChange("q3", 1)}
              value="false"
            >
              아니오
            </button>
          </>
        );
      case 3:
        return (
          <>
            <button
              className={isClicked.q4[0] ? "on" : ""}
              onClick={onChange("q4", 0)}
              value="1개월"
            >
              1개월
            </button>
            <button
              className={isClicked.q4[1] ? "on" : ""}
              onClick={onChange("q4", 1)}
              value="6개월"
            >
              6개월
            </button>
            <button
              className={isClicked.q4[2] ? "on" : ""}
              onClick={onChange("q4", 2)}
              value="12개월"
            >
              12개월
            </button>
            <button
              className={isClicked.q4[3] ? "on" : ""}
              onClick={onChange("q4", 3)}
              value="24개월 초과"
            >
              24개월 초과
            </button>
          </>
        );
      case 4:
        return (
          <>
            <input
              onChange={onChange("q5", 0)}
              onClick={(e) => {
                setSelectedValues({
                  ...selectedValues,
                  q5: "",
                });
                e.target.value = "";
              }}
              placeholder="금액을 입력해 주세요."
              maxLength={13}
            />
          </>
        );
      case 5:
        return (
          <>
            <button
              className={isClicked.q6[0] ? "on" : ""}
              onClick={onChange("q6", 0)}
              value="1회 이상"
            >
              1회 이상
            </button>
            <button
              className={isClicked.q6[1] ? "on" : ""}
              onClick={onChange("q6", 1)}
              value="6회 이상"
            >
              6회 이상
            </button>
            <button
              className={isClicked.q6[2] ? "on" : ""}
              onClick={onChange("q6", 2)}
              value="12회 이상"
            >
              12회 이상
            </button>
            <button
              className={isClicked.q6[3] ? "on" : ""}
              onClick={onChange("q6", 3)}
              value="24회 이상"
            >
              24회 이상
            </button>
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <div className="title" dangerouslySetInnerHTML={{ __html: Q }} />

      <div className="article">{setArticle()}</div>
      {i === 5 ? (
        <div className="submit">
          <button
            onClick={() =>
              alert(`
          1: ${selectedValues.q1}
          2: ${selectedValues.q2}
          3: ${selectedValues.q3}
          4: ${selectedValues.q4}
          5: ${selectedValues.q5}
          6: ${selectedValues.q6}
          `)
            }
          >
            .zip 시작하기
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Survey;