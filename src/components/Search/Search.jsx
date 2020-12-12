import React, {useState, useCallback} from 'react';
import {connect} from "react-redux";
import {useLocation, useHistory} from 'react-router-dom';
import {getSearch} from "../../actions/getSearch";
import FoundTracks from "./FoundTracks/FoundTracks";
import debounce from 'lodash.debounce';
import "./Search.scss";


const Search = ({getSearch, foundTracks, loading, error}) => {

    const location = useLocation();
    const urlSearchParam = new URLSearchParams(location.search);
    const history = useHistory();
    const [inputValue, setInputValue] = useState(urlSearchParam.get('searchQuery') || '');

    const pushUrlSearchParam = (inputValue) => {
        if (inputValue) {
            urlSearchParam.set('searchQuery', inputValue);
        } else {
            urlSearchParam.delete('searchQuery');
        }

        history.push({
            search: urlSearchParam.toString()
        })
    };


    const debounceSearchParams = useCallback(
        debounce(getSearch, 500),
        [],
    );

    return (
        <div className="search">
                <input
                    type="text"
                    className="search__input"
                    value={inputValue}
                    placeholder="Search by name"
                    onChange={(event) => {
                        const value = event.target.value;
                        setInputValue(value);
                            pushUrlSearchParam(value);
                            debounceSearchParams(value.replaceAll(' ', '+'));
                    }}
                />

            <FoundTracks foundTracks={foundTracks} loading={loading} />
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        getSearch: (name) => {
            dispatch(getSearch(name));
        }
    };
};

const mapStateToProps = state => {
    return {
        foundTracks: state.foundTracks.foundTracks,
        loading: state.foundTracks.loading,
        error: state.foundTracks.error
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
