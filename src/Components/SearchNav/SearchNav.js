//SearchNav component
//Path: App > SEARCHNAV > SearchBar / AdvancedFilter > DropDown
//To contain: SearchBar, AdvancedFilter
//Props: ??

import AdvancedFilter from '../AdvancedFilter/AdvancedFilter';
import SearchBar from '../SearchBar/SearchBar.js'

function SearchNav() {
    return(
        <div className="search-nav" id="search-nav">
            <SearchBar />
            <AdvancedFilter />
        </div>
    )
  }
  
  export default SearchNav;