import css from './SearchBox.module.css'

const SearchBox = ({ value, onSearch }) => {

    return (
        <div className={css.container}>
            <p className={css.text}>Find contacts by name</p>
            <input
                className={css.input}
                type="text"
                value={value}
                onChange={(e) => onSearch(e.target.value)}
            > </input>
        </div>
    )
}

export default SearchBox;