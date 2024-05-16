import { useGlobalContext } from "./context";

function SearchForm() {
    const {setSearchTerm} = useGlobalContext();
    const handleSubmit = (e) => {
        e.preventDefault();
    const searchText = e.target.elements.search.value;
    setSearchTerm(searchText)

    }
    return ( <div className="search_form_page">
    <h1 className='title'>unsplash images</h1>
        <form className="search_form" onSubmit={handleSubmit}>
        <input type="text" placeholder="search" name="search" className="form-input search-input"></input>
        <button className="form_btn" type="submit">Submit</button>
        </form>
        </div> );
}

export default SearchForm;