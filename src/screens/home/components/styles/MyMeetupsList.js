import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1
  },
  titleContainer: {
    flex: 0.1,
    paddingHorizontal: '2.5%',
    paddingVertical: '2.5%'
  },
  title: {
    color: '$whiteColor',
    fontSize: 25,
    fontFamily: 'montserrat',
    backgroundColor: 'transparent',
    shadowOpacity: 0.8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 3
    },
  },
  space: {
    opacity: 0,
    backgroundColor: 'transparent'
  },
  contentContainer: {
    flex: 1
  },
  meetupCard: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,

    height: 180,
    width: 175,
    marginHorizontal: '1.5%',
    backgroundColor: '$redColor',
    shadowOpacity: 0.8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 3
    },
  },
  meetupCardTopContainer: {
    flex: 1,
    position: 'relative'
  },
  meetupCardTitle: {
    position: 'absolute',
    color: '$whiteColor',
    top: '2%',
    left: '2.5%',
    fontFamily: 'montserratBold'

  },
  meetupCardDescription: {
    position: 'absolute',
    color: '$whiteColor',
    top: '7%',
    left: '2.5%',
    right: '2.5%',
    fontFamily: 'montserrat',
    fontSize: 11,

  },
  meetupCardBottomContainer: {
    flex: 0.4,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    paddingHorizontal: '2.5%'
  },
  meetupCardMetaName: {
    fontSize: 15,
    fontFamily: 'montserrat'
  },
  meetupCardMetaDate: {
    fontSize: 13,
    fontFamily: 'montserratLight'
  }
});

export default styles;
