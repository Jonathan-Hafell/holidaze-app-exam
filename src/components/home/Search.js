import React from "react";
import axios from "axios";
import { BASE_URL, HOTELS_ENDPOINT } from "../../constants/api";
import "../../css/styles.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
    };

    this.cancel = "";
  }

  fetchSearchResults = (query) => {
    const searchUrl = `${BASE_URL}/${HOTELS_ENDPOINT}`;

    if (this.cancel) {
      this.cancel.cancel();
    }

    this.cancel = axios.CancelToken.source();

    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        const resultNotFoundMessage = !res.data.length
          ? "There are no more search results"
          : "";

        this.setState({
          results: res.data,
          message: resultNotFoundMessage,
          loading: false,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "failed to fetch",
          });
        }
      });
  };

  handleOnInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      this.setState({ query: query, results: {}, message: "" });
    } else {
      this.setState({ query: query, loading: true, message: "" }, () => {
        this.fetchSearchResults(query);
      });
    }
  };

  renderSearchResults = () => {
    const { results, id } = this.state;

    if (Object.keys(results).length && results.length) {
      return (
        <div className="results-container">
          {results.map((result) => {
            return (
              <a key={result.id} href={`hotels/${id}`} className="result-item">
                <h6 className="image-name">{result.name}</h6>
                <div className="image-wrapper">
                  <img
                    className="image"
                    src={result.imageUrl}
                    alt={result.name}
                  />
                </div>
              </a>
            );
          })}
        </div>
      );
    }
  };

  render() {
    const { query, loading, message } = this.state;
    return (
      <div className="search-container">
        <label>
          <input
            type="text"
            name="query"
            value={query}
            id="search-input"
            placeholder="Search..."
            onChange={this.handleOnInputChange}
          />
        </label>

        {message && <p className="message">{message}</p>}

        <div className={`loader ${loading ? "show" : "hide"}`}></div>

        {this.renderSearchResults()}
      </div>
    );
  }
}

export default SearchBar;
