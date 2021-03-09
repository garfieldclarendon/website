import React from 'react'
import { Link } from 'gatsby'
import { format, toDate, setDay, getDay } from 'date-fns';
import startOfMonth from 'date-fns/startOfMonth';
import { useStaticQuery, graphql } from 'gatsby'

const Notice = () => {
    const data = useStaticQuery(
        graphql`
        query OpenHouseDates {
            allContentfulOpenHouses {
            nodes {
                date
            }
            }
        }
        `
    );
    let theDate = null;
    const futureDates = data.allContentfulOpenHouses.nodes.filter(item => (toDate(new Date(item.date)) > new Date()));
    const hasOpenHouses = futureDates.length > 0;
    let showOpenMessage = false;
    const friday = 5;
    const currentDay = format(new Date(), 'EEE');
    const start = startOfMonth(new Date());
    const firstFriday = setDay(start, friday, { weekStartsOn: getDay(start) });
    const isTheFirstWeek = toDate(new Date(firstFriday)) > new Date();

    if (!isTheFirstWeek && (currentDay === "Wed" || currentDay === "Thurs" || currentDay === "Fri")) {
        showOpenMessage = true;
    }

    if (data.allContentfulOpenHouses.nodes.length > 0) {
        theDate = toDate(new Date(data.allContentfulOpenHouses.nodes[0].date));
    }

    if (hasOpenHouses || showOpenMessage) {
        document.querySelector('body').classList.add('hasNoticeBar');
    } else {
        document.querySelector('body').classList.remove('hasNoticeBar');
    }

    return ((hasOpenHouses || showOpenMessage) && (<>
        <div className="noticeBar">
            <p>
                {showOpenMessage && <><b>Open on Friday:</b> 7PM - 9PM <Link to="/visit">Learn More</Link></>}
                {hasOpenHouses && (<><b>Next open house:</b> {format(theDate, 'yyyy-MM-dd')} <Link to="/open-houses">Learn More</Link></>)}
            </p>
        </div>
    </>)
    )
}

export default Notice
