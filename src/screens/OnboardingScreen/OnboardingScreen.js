import React from 'react';
import PropTypes from 'prop-types';
import { SectionsContainer, Section } from 'react-fullpage';
import styles from './styles';

// class OnboardingScreen extends React.Component {
//   constructor (props) {
//     super(props);
//     this._classes = this.props.classes;
//     this.state = {};
//     return ;
//   }
//   render () {
//     return (
//       <div className={ this._classes.root }>
//         <h1>{ "OnboardingScreen" }</h1>
//       </div>
//     );
//   }
// }

let options = {
  activeClass:          'active', // the class that is appended to the sections links
  autoScrolling:        true,
  anchors:              [], // the anchors for each sections
  arrowNavigation:      true, // use arrow keys
  className:            'SectionContainer', // the class name for the section container
  delay:                1000, // the scroll animation speed
  navigation:           true, // use dots navigatio
  scrollBar:            false, // use the browser default scrollbar
  sectionClassName:     'Section', // the section class name
  sectionPaddingTop:    '0', // the section top padding
  sectionPaddingBottom: '0', // the section bottom padding
  verticalAlign:        false // align the content of each section vertical
};
const OnboardingScreen = props => {
  return (
    <SectionsContainer {...options}>
      <Section>Page a</Section>
      <Section>Page b</Section>
      <Section>Page c</Section>
    </SectionsContainer>
  );
};

// OnboardingScreen.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default OnboardingScreen;
