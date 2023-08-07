const ErrorPage = ({ error }) => {

    return (
        <div className='err_wrap'>
            <p>{error.message}</p>
        </div>
    )
}

export default ErrorPage;
