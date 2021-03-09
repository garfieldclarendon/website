import React from 'react'

const timelineData = [
    {
        text: 'Club Founded',
        date: '1947',
        category: {
            tag: 'Club',
            color: '#018f69'
        },
    },
    {
        text: 'Moved to Clarendon Park',
        date: '1963',
        category: {
            tag: 'Club',
            color: '#018f69'
        },
    },
    {
        text: 'Current Layout Started',
        date: '1974',
        category: {
            tag: 'Layouts',
            color: '#c2bc3d'
        },
    },
    {
        text: 'First Operations',
        date: '???',
        category: {
            tag: 'Layouts',
            color: '#c2bc3d'
        },
    },
    {
        text: 'Golden Spike',
        date: '???',
        category: {
            tag: 'Layouts',
            color: '#c2bc3d'
        },
    },
    {
        text: 'Summit Trolley Completed',
        date: '???',
        category: {
            tag: 'Layouts',
            color: '#c2bc3d'
        },
    },
    {
        text: 'First Youth Outreach Program',
        date: '2018',
        category: {
            tag: 'Club',
            color: '#018f69'
        },
    },
];

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

const Timeline = () => {
    return timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => {
                return data.category ? (
                    <TimelineItem data={data} key={idx} />
                ) : null
            }
            )}
        </div >
    );
}
export default Timeline
