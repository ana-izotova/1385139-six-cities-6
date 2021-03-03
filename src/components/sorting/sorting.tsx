import React, {useRef} from "react";
import {StateTypes} from "../../store/store-types";
import {Dispatch} from "redux";
import {ActionCreator} from "../../store/action";
import {SortType} from "../../const";
import {connect} from "react-redux";
import {SortingProps} from "./sorting-types";

const Sorting: React.FC<SortingProps> = ({
  currentSort,
  onUserClick,
}) => {

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

const mapStateToProps = ({currentSort}: StateTypes) => ({
  currentSort,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onUserClick(sortType: string) {
    dispatch(ActionCreator.changeCurrentSort(sortType));
  },
});

export {Sorting};

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
