function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">

                <div className="col-md-10 px-3"> {/* Adjusted column size to medium screens */}
                    <div className="dash border px-4">

                        <div className='row py-3'>
                            <div className='col-12 col-md-4 mb-4 mb-md-0'> {/* Adjusted column size for mobile and medium screens */}
                                <div className='dash1 border shadow rounded'>
                                    <h5 className="text-center mt-3">Total Employees</h5>
                                    <p className="text-center">7</p>
                                    <div className="color_div1 m-1" ><span className="dashboard_percentage1"></span></div>
                                </div>
                            </div>

                            <div className='col-12 col-md-4 mb-4 mb-md-0'> {/* Adjusted column size for mobile and medium screens */}
                                <div className='dash2 border shadow rounded'>
                                    <h5 className="text-center mt-3">Total Present</h5>
                                    <p className="text-center">0</p>
                                    <div className="color_div2 m-1"><span className="dashboard_percentage2 "></span></div>
                                </div>
                            </div>

                            <div className='col-12 col-md-4'> {/* Adjusted column size for mobile and medium screens */}
                                <div className='dash3 border shadow rounded'>
                                    <h5 className="text-center mt-3">Total Absent</h5>
                                    <p className="text-center">7</p>
                                    <div className="color_div3 m-1" ><span className="dashboard_percentage3"></span></div>
                                </div>
                            </div>
                        </div>

                        <h3 className='h3 py-2'>Department Summary</h3>

                        <div className='row py-3'>
                            <div className='col-6 col-md-3 mb-4 mb-md-0'> {/* Adjusted column size for mobile and medium screens */}
                                <div className='bot1 border shadow bg-white rounded'>
                                    <h5 className="text-center mt-3">Accounts</h5>
                                    <p className="text-center">1</p>
                                </div>
                            </div>

                            <div className='col-6 col-md-3 mb-4 mb-md-0'> {/* Adjusted column size for mobile and medium screens */}
                                <div className='bot2 border shadow bg-white rounded'>
                                    <h5 className="text-center mt-3">Development</h5>
                                    <p className="text-center">1</p>
                                </div>
                            </div>

                            <div className='col-6 col-md-3 mb-4 mb-md-0'> {/* Adjusted column size for mobile and medium screens */}
                                <div className='bot3 border shadow bg-white rounded'>
                                    <h5 className="text-center mt-3">Admin</h5>
                                    <p className="text-center">1</p>
                                </div>
                            </div>

                            <div className='col-6 col-md-3'> {/* Adjusted column size for mobile and medium screens */}
                                <div className='bot4 border shadow bg-white rounded'>
                                    <h5 className="text-center mt-3">Sales</h5>
                                    <p className="text-center">4</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;
