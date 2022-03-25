import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
// COLORS
export const COLORS = {
  //base colors
 

  // colors
  
};

// global style
export const gs = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
  },
  sectionContainer: {
    paddingHorizontal: '6%',
    marginVertical: 10,
    width: '100%',
  },
  screenPadding: {
    paddingVertical: 30,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: COLORS.black,
    fontSize: 23,
    fontFamily: 'Tajawal-Medium',
  },
  subTitle: {
    color: COLORS.gray,
    fontSize: 15,
    fontFamily: 'Tajawal-Regular',
  },
  paragraph1: {
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
  },
  paragraph2: {
    fontSize: 17,
    fontFamily: 'Tajawal-Medium',
    lineHeight: 24,
    color: COLORS.darkPurple,
  },
  image: {resizeMode: 'cover', width: '100%', height: '100%'},
  errorText: {
    fontSize: 16,
    fontFamily: 'Tajawal-Medium',
    lineHeight: 22,
    color: COLORS.secandary,
    textAlign: 'right',
    marginTop: 5,
  },
  emptyMessage: {
    fontFamily: 'Tajawal-Medium',
    fontSize: 20,
    color: COLORS.darkPurple,
    textAlign: 'center',
    marginVertical: 5,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    height: 60,
    borderWidth: 2,
    width: '100%',
  },
  btnText: {
    fontFamily: 'Tajawal-Medium',
    fontSize: 21,
    textAlign: 'center',
  },

  inputContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    borderColor: COLORS.blue,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    textAlign: 'right',
    color: COLORS.secandary,
    fontSize: 18,
    fontFamily: 'Tajawal-Medium',
    flex: 1,
    padding: 0,
    margin: 0,
  },
  highlight: {
    color: COLORS.blue,
    fontFamily: 'Tajawal-Medium',
  },

  label: {
    fontFamily: 'Tajawal-Medium',
    fontSize: 22,
    color: COLORS.purple,
    marginBottom: 10,
  },
  stepsLabel: {
    fontFamily: 'Tajawal-Medium',
    color: COLORS.secandary,
    fontSize: 18,
    textAlign: 'center',
  },
  stepsActiveLabel: {
    color: COLORS.blue,
  },
  stepsLabelActiveContainer: {
    borderBottomWidth: 3,
    borderColor: COLORS.blue,
    paddingBottom: 2,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(220, 220, 220, 0.7)',
  },
  placeholder: {
    fontFamily: 'Tajawal-Medium',
    color: COLORS.gray,
    fontSize: 15,
  },

  cardContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    height: 350,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  cardTitle: {
    fontFamily: 'Tajawal-Medium',
    color: COLORS.darkPurple,
  },
  cardLargeTitle: {
    fontSize: 16,
    lineHeight: 20,
    marginTop: 5,
  },
  cardMediumTitle: {
    fontSize: 14,
    lineHeight: 18,
    marginTop: 2,
  },
  cardImageContainer: {
    height: '65%',
    width: '100%',
    position: 'relative',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
  },
  cardDescriptionContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },

  iconContainer: {
    backgroundColor: 'rgba(0,0,0,0.03)',
    borderRadius: 8,
    top: 10,
    right: 10,
    zIndex: 10,
    position: 'absolute',
  },
  arrowContainer: {
    position: 'absolute',
    right: '6%',
    top: 30,
    zIndex: 1000,
    backgroundColor: 'rgba(0,0,0,0.03)',
    borderRadius: 8,
  },

  tagContainer: {
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  tag: {
    fontFamily: 'Tajawal-Medium',
    color: COLORS.white,
    fontSize: 13,
  },
});

//Dimensions
export const dimensions = {
  width,
  height,
};
