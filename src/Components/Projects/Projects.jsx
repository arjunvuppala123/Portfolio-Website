import "./Projects.css";

function Projects() {
    return (
        <section class="ftco-section ftco-no-pb goto-here" id="skills">
            <div class="title-box-2">
                <h5 class="title-left">
                    My Projects
                </h5>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-heading">Autism Classification System</h5>
                            <a id="btn" href="https://github.com/arjunvuppala123/Autism-classification-" class="btn btn-primary">Project Link</a>
                            <p class="card-text">This project aims at developing a Deep Learning based model to detect autism based on data 
                                                        collected from facial images and behavioural patterns of the children. This approach also makes use of Linear Classification based approach 
                                                        called SVM. SVM uses a dataset containing different characteristics majorly observed and known symptoms of autism.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-heading">Movie Ticket Booking System</h5>
                            <a id="btn" href="https://github.com/arjunvuppala123/Movie-Ticket-Booking-System" class="btn btn-primary">Project Link</a>
                            <p class="card-text">
                                Interface is a Web application developed in SpringBoot which aims in helping users to book a ticket and 
                                                        cancel at will. The movies are added, deleted and updated by the admin. Database is MySQL 
                                                        and frontend is in html ,css ,thymeleaf and bootstrap.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-heading">Crime Classification with Spark Streaming</h5>
                            <a id="btn" href="https://github.com/arjunvuppala123/Machine-Learning-with-Spark-Streaming-1" class="btn btn-primary">Project Link</a>
                            <p class="card-text">
                                This system processed the streaming data and applied machine learning techniques to analyse 
                                                            and predict the category of crime based on description of the crime. 
                                                            Apache Spark Streaming was used to stream the data and MLib and NLP have been used to process the data.
                            </p>
                        </div>
                    </div>
                </div>
                <br/>
                <div>
                    <div>
                        <button onclick="location.href='https://github.com/arjunvuppala123?tab=repositories';"  class="button"> 
                                Check my other projects out 
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;
