export default function Footer () {
    return <footer className="bg-dark py-5 position-relative z-2">
        <div className="container">
            <div className="row justify-content-between text-md-center text-lg-start gap-md-5">
                <div className="col-lg-3 col-sm-12 d-flex flex-column">
                <h4 className="text-white mb-3">Contact</h4>
                    <a href="tel:+234239879327" className="text-secondary text-decoration-none">+234 23 9879327</a>
                    <a href="https://some.email@somewhere.com/" className="text-decoration-none text-white">some.email@somewhere.com</a>
                    <a href="/" className="text-secondary text-decoration-none d-inline-block mt-3">234 Hidden Pond Road, Ashland City, TN 37015
                    </a>
                </div>
                <div className="col-lg-2">
                    <h4 className="text-white mb-3">Follow Me</h4>
                    <div className="social-links d-flex gap-1 justify-content-md-center justify-content-lg-start">
                        <a href="/">
                        <svg width="48" height="48" fill="#fff" viewBox="0 0 24 24">
                            <path d="M23.25 5.133a9.46 9.46 0 0 1-2.65.717 4.57 4.57 0 0 0 2.03-2.512c-.908.53-1.9.903-2.932 1.101A4.647 4.647 0 0 0 16.327 3c-2.55 0-4.615 2.034-4.615 4.542a4.37 4.37 0 0 0 .119 1.036A13.158 13.158 0 0 1 2.315 3.83a4.485 4.485 0 0 0-.627 2.283c0 1.574.821 2.967 2.062 3.782a4.57 4.57 0 0 1-2.1-.567v.056c0 2.204 1.595 4.036 3.704 4.454a4.752 4.752 0 0 1-1.216.159c-.291 0-.582-.028-.868-.085.587 1.805 2.294 3.118 4.315 3.155a9.356 9.356 0 0 1-6.835 1.88A13.063 13.063 0 0 0 7.816 21c8.501 0 13.146-6.923 13.146-12.928 0-.197-.006-.394-.015-.586a9.304 9.304 0 0 0 2.303-2.353Z"/>
                        </svg>
                        </a>
                        <a href="/">
                            <svg width="48" height="48" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24">
                                <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path>
                                <path d="m5.65 5.648 12.7 12.7"/>
                                <path d="m5.65 18.348 12.7-12.7"/>
                                <path d="M12 3a9 9 0 0 0 9 9"/>
                                <path d="M3 12a9 9 0 0 1 9 9"/>
                            </svg>
                        </a>
                        <a href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#fff" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                        </a>
                        <a href="/">
                        <svg width="48" height="48" fill="#fff" viewBox="0 0 24 24">
                            <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"/>
                        </svg>
                        </a>
                    </div>
                </div>
                <div className="col-lg-5">
                    <h4 className="text-white mb-3">Text Widget</h4>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus temporibus laboriosam accusantium reiciendis sed et quisquam odit pariatur. Accusamus, doloremque. Itaque soluta asperiores odit laudantium tempora sit architecto dolor molestiae vel! Ipsum omnis tempora rerum facere voluptas!</p>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsa odit deleniti possimus consectetur nihil cum reprehenderit, tempora quidem laudantium neque cumque beatae quis perferendis officiis quaerat repudiandae, repellat minima sint ducimus amet. Iste doloribus, ut dolorum totam quaerat tenetur.</p>
                </div>
            </div>
        </div>
    </footer>
}