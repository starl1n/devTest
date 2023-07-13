import { useState, useEffect } from "react";
import "./App.css";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";

function App() {
  const [data, setData] = useState();

  // https://www.bitmex.com/api/v1

  const baseUrl = "https://localhost:44303/api/Announcement";

  const getDataApi = () => {
    const response = fetch(baseUrl, {
      method: "GET",
      withCredentials: true,
      crossorigin: true,
      mode: "no-cors",
    })
      .then((response) => response.json())
      .then((res) => res.json())
      .then((data) => {
        setData(response);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getDataApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3 className="tittle-header">Hello DevTest</h3>
      </header>

      <div className="body">
        <Container>
          <Table striped bordered hover size="md">
            <thead>
              <tr>
                <th>Id</th>
                <th>Link</th>
                <th>Title</th>
                <th>Content</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {data > 0 &&
                data.map((item, i) => {
                  return (
                    <tr>
                      <td key={i}>{item.Id}</td>
                      <td key={i}>{item.Link}</td>
                      <td key={i}>{item.Title}</td>
                      <td key={i}>{item.Content}</td>
                      <td key={i}>{item.Date}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
}

export default App;
