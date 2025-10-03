/**
 * This is the onboarding page requirement content
 */

interface OnboardingConfig {
  hero: {
    heading: string;
    tagline: string;
  };
  registration: {
    heading: string;
    subtitle: string;
  };
}

const onboardingConfig: OnboardingConfig = {
  hero: {
    heading: 'Start Your Journey With Us!',
    tagline: 'Join our vibrant community where knowledge meets opportunity. Whether you\'re looking to share your expertise or eager to learn, EventGo connects passionate mentors with curious minds through meaningful events and personalized mentorship experiences.'
  },
  registration: {
    heading: 'Welcome to EventGo',
    subtitle: 'Join our community by filling out the registration form below. Whether you\'re a mentor, mentee, organizer, or attendee, we have a place for you!'
  }
};

export default onboardingConfig;