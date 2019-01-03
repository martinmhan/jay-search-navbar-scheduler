import React from 'React';
import style from '../css/Search.css';


const SearchResults = (props) => {
    let cityMatch = props.cityMatch;
    let cuisineMatch = props.cuisineMatch;
    let restaurantMatch = props.restaurantMatch;
    return (
        <div className={style.searchResults}>
            <header className={style.searchHeader}>search: "{props.text}"</header>
            {cityMatch.length !== 0 ? <div className={style.locationResults}>
                <div className={style.searchCategoryText}>Locations</div>
                <ul>
                    {props.cityMatch.map(locaMatch => <li><a href className={style.searchResultText}>{locaMatch.city}</a></li>)}
                </ul>
            </div> : <div></div>}
            {cuisineMatch.length !== 0 ? <div className={style.cuisinesResults}>
                <div className={style.searchCategoryText}>Cuisines</div>
                <ul>
                    {props.cuisineMatch.map(cuisMatch => <li><a href className={style.searchResultText}>{cuisMatch.cuisineName}</a></li>)}
                </ul>
            </div> : <div></div>}
            {restaurantMatch.length !== 0 ? <div className={style.restaurantResults}>
                <div className={style.searchCategoryText}>Restaurants</div>
                <ul>
                    {props.restaurantMatch.map(restMatch => <li><a href class="font searchResultText">{restMatch.restaurantName}</a></li>)}
                </ul>
            </div> : <div></div>}
        </div>
    )
}

export default SearchResults;