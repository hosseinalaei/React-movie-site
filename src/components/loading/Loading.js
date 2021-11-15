const Loading = (props) => {
    const { isLoading } = props
    return (
        <div className="d-flex justify-content-center align-items-center text-center">
            <div className="spinner-grow" role="status" style={{ display: isLoading === true ? 'block' : 'none' }}>
                {/* < span className="sr-only" > Loading...</span > */}
            </div >
        </div >
    )
}

export default Loading;