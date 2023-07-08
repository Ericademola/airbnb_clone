const DisplayGrid = () => {

    const trendGridContainer = {
        display: "grid",
        gap: "30px 21px",
        gridTemplateColumns: "auto auto auto auto",
        backgroundColor: "#2196F3",
        padding: "0 40px",
        overflow: "auto",
    }

    const gridItem = {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        border: "1px solid rgba(0, 0, 0, 0.8)",
        fontSize: "30px",
        height: "420px",
    }

    const pictures = {
        backgroundColor: "red",
        width: "100%",
        height: "300px",
        borderRadius: "20px"
    }

  return (
    <div>
        <div style={trendGridContainer}>
            <div style={gridItem}>
                <div style={pictures}></div>
                <div><small>gfd</small></div>
                <div><small>gfd</small></div>
                <div><small>hgf</small></div>
                <div><small>gfd</small></div>
            </div>
            <div style={gridItem}></div>
            <div style={gridItem}></div>
            <div style={gridItem}></div>
            <div style={gridItem}></div>
            <div style={gridItem}></div>
            <div style={gridItem}></div>
            <div style={gridItem}></div>
            <div style={gridItem}></div>
            <div style={gridItem}></div>
            <div style={gridItem}></div>
            <div style={gridItem}></div>
            <div style={gridItem}></div>
        </div>
    </div>
  )
}
export default DisplayGrid