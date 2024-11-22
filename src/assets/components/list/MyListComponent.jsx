import { useState } from "react";
import styles from "../../css/mylistcomponent.module.css"
/* const MyListComponent = ({listElements}) => {
    return (
    <ul>
        {
        listElements.map((item) => (
            <li key={item.id} id={item.id}>{item.name}</li>
        ))
        }
    </ul>
    )
} */
function MyListComponent(props) {
  const [descriptionVisible, setdescriptionVisible] = useState(false);
  //console.log(props);

  let buttonStyle = {
    marginLeft: "auto",
    backgroundColor: "orange",
    border: "none",
    padding: "4px",
    fontSize: "1rem",
    color: "white",
    borderRadius: "10%",
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "lavender",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
          borderRadius: "5px",
          marginTop: "5px",
          width: "280px",
          color: "gray",
        }}
      >
        <p
          className={styles.text} onClick={() =>
            setdescriptionVisible(!descriptionVisible)
          }
          title="See description"
        >
          Vedi descrizione
        </p>
        <button title="Delete" style={{...buttonStyle, backgroundColor: "pink"}}>
          Delete
        </button>

        {descriptionVisible && (
          <small style={{ backgroundColor: "#ff9", padding: "5px" }}>
            Description
          </small>
        )}
      </div>

<br /><br /><br />

      <ul>
        {props.listElements.map((item) => (
          <li key={item.id} id={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MyListComponent;
