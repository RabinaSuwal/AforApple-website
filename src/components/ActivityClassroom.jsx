import React from 'react';

function ActivityClassroom() {
  const classroomData = [
    {
      icon: 'activity.svg',
      title: 'Activity Classroom',
      image: 'activity.png',
      description:
        'Semper feugiat nibh sed pulvinar proin gravida. Aliquam eleifend mi in nulla. In pellentesque massa placerat duis ultricies. Lorem ipsum dolor sit amet consectetur adipiscing elit ut...',
    },
    {
      icon: 'play.svg',
      title: 'Play Classroom',
      image: 'play.png',
      description:
        'Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Nunc eget lorem dolor sed. Rutrum...',
    },
    {
      icon: 'computer.svg',
      title: 'Computer Classroom',
      image: 'computer.png',
      description:
        'Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Lacus luctus accumsan tortor posuere ac ut. Elementum facilisis leo vel fringilla est ullamcorper....',
    },
    {
      icon: 'science.svg',
      title: 'Science Lab',
      image: 'science.png',
      description:
        'Rhoncus dolor purus non enim. Libero volutpat sed cras ornare arcu dui vivamus arcu. Lorem mollis aliquam ut porttitor leo a diam. Eros in cursus turpis massa tincidunt.',
    },
  ];

  return (
    <div className="classroom-section">
      {classroomData.map((classroom, index) => (
        <div className="classroom-card" key={index}>
         
            <img
              src={classroom.icon}
              alt={`${classroom.title} Icon`}
              // width="478px"
              // height="478px"
              className="classroom-icon"
            />
         
          <div className="circle-container">
            <img
              src={classroom.image}
              alt={classroom.title}
              // width="219px"
              // height="219px"
            />
          </div>
          <div className='classroom-details'>
            <h3>{classroom.title}</h3>
            <p>{classroom.description}</p>
            <button className="more-about-button">GET STARTED →</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActivityClassroom;
