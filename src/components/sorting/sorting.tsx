import React, {useRef} from "react";
import {changeCurrentSort} from "../../store/actions";
import {SortType} from "../../const";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/root-reducer";

const Sorting: React.FC = () => {
  const {currentSort} = useSelector((state: RootStateType) => state.ALL_OFFERS);
  const dispatch = useDispatch();
  const onUserClick = (sortType: string) => dispatch(changeCurrentSort(sortType));
  const sortList = useRef<HTMLUListElement>(null);

  const handleSortListClick = () => {
    if (sortList && sortList.current) {
      sortList.current.classList.toggle(`places__options--opened`);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortListClick}>
        {currentSort}
        <svg className="places__sorting-arrow" style={{width: 7, height: 4}}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom" ref={sortList} onClick={handleSortListClick}>
        {Object.entries(SortType).map(([key, value]) => {
          return (
            <li
              className={`places__option ${
                value === currentSort ? `places__option--active` : ``
              }`}
              tabIndex={0}
              key={key}
              onClick={() => onUserClick(value)}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </form>
  );
};

export default React.memo(Sorting);
