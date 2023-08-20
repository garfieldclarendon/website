import React from 'react'
import BodyClassName from 'react-body-classname'
import { Link } from 'gatsby'
import { format, toDate, setDay, getDay } from 'date-fns'
import startOfMonth from 'date-fns/startOfMonth'
import { useStaticQuery, graphql } from 'gatsby'

const Notice = () => {
  const data = useStaticQuery(
    graphql`
      query OpenHouseDates {
        allContentfulOpenHouses(limit: 1) {
          nodes {
            date
          }
        }
      }
    `
  )
  let theDate = null
  const futureDates = data.allContentfulOpenHouses.nodes.filter(
    (item) => toDate(new Date(item.date)) > new Date()
  )
  const hasOpenHouses = futureDates.length > 0
  let showOpenMessage = false
  const friday = 5
  const currentDay = format(new Date(), 'EEE')
  const start = startOfMonth(new Date())
  const firstFriday = setDay(start, friday, { weekStartsOn: getDay(start) })
  const isTheFirstWeek = toDate(new Date(firstFriday)) > new Date()

  if (
    !isTheFirstWeek &&
    (currentDay === 'Wed' || currentDay === 'Thurs' || currentDay === 'Fri')
  ) {
    showOpenMessage = true
  }

  if (data.allContentfulOpenHouses.nodes.length > 0) {
    theDate = toDate(new Date(data.allContentfulOpenHouses.nodes[0].date))
  }

  return (
    <BodyClassName
      className={hasOpenHouses || showOpenMessage ? 'hasNoticeBar' : ''}
    >
      {(hasOpenHouses || showOpenMessage) && (
        <div className="noticeBar">
          <p>
            {/* {showOpenMessage && (
              <>
                <b>Open on Friday (with RSVP):</b> 5:30PM - 7PM{' '}
                <Link to="/visit">Learn More</Link>
              </>
            )} */}
            {/* hasOpenHouses && ( */}
            <>
              <b>Next event:</b> {/* format(theDate, 'EEEE MMM-do') */}
              {' Sunday Aug 20th'}
              <Link to="/open-houses">Learn More</Link>
            </>
            {/*)*/}
          </p>
        </div>
      )}
    </BodyClassName>
  )
}

export default Notice
