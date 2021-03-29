const Topic = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4" id="topic">
            <div className="col">
            <div className="card-topic">
                <div className="card-body topic">
                <h5 className="card-title topic-title">London</h5>
                <h6 className="card-subtitle mb-2 text-muted topicSub">Westminster Abbey</h6>
                <p className="card-text topicText">Westminster Abbey, formally titled the Collegiate Church of Saint Peter at Westminster, is a large, mainly Gothic abbey church in the City of Westminster, London, England, just to the west of the Palace of Westminster. It is one of the United Kingdom's most notable religious buildings and the traditional place of coronation and a burial site for English and, later, British monarchs.</p>
                </div>
            </div>
            </div>

            <div className="col">
            <div className="card-topic">
                <div className="card-body topic">
                <h5 className="card-title topic-title">San-Francisco</h5>
                <h6 className="card-subtitle mb-2 text-muted topicSub">Golden Gate</h6>
                <p className="card-text topicText">The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San Francisco Bay and the Pacific Ocean. The structure links the U.S. city of San Francisco, California—the northern tip of the San Francisco Peninsula—to Marin County, carrying both U.S. Route 101 and California State Route 1 across the strait.</p>
                </div>
            </div>
            </div>

            <div className="col">
            <div className="card-topic">
                <div className="card-body topic">
                <h5 className="card-title topic-title">Seattle</h5>
                <h6 className="card-subtitle mb-2 text-muted topicSub">Space Needle</h6>
                <p className="card-text topicText">The Space Needle is an observation tower in Seattle, Washington, United States. Considered to be an icon of the city and the Pacific Northwest, it has been designated a Seattle landmark. Located in the Lower Queen Anne neighborhood, it was built in the Seattle Center for the 1962 World's Fair, which drew over 2.3 million visitors. Nearly 20,000 people a day used its elevators during the event.</p>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Topic;