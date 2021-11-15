import { Fragment } from "react";
import { imageServerUrl } from "../../constants";
import { textDots } from "../../helpers";
import get from 'lodash/get';
// import './style.css';

const SearchList = ({ data = [] }) => {
    // const {data} = props
    const renderFarm = () => {
        const result = get(data, 'results', [])
        return result.map((item) => {
            const { original_title, poster_path, id, title } = item;
            const imageUrl = `${imageServerUrl}${poster_path}`;
            return (
                // <div className="search-list-handler">
                <div key={id} className="search-list">
                    <div className="search-list-img">
                        <img src={imageUrl} alt={original_title} />
                    </div>

                    <h3>{textDots(title, 10)}</h3>
                </div>
                // </div>
            );
        });
    };
    return (
        <Fragment>
            <div className="search-list-handler">
                {renderFarm()}
            </div>
        </Fragment>
    );
};

export default SearchList;