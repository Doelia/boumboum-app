export const COLORS = {
  PINK: '#ED2272',
  LIGHT_GRAY: '#8287A1',
  DARK_BLUE: '#2F215F',
  BORDER: '#DEDEDE',
}

export const CONTENT_PADDING = 30

export const CENTER = {
  justifyContent: 'center',
  alignItems: 'center',
}

export const P100 = {
  width: '100%',
  height: '100%',
}

export const STYLES = {
  H1: {
    fontSize: 32,
    color: COLORS.DARK_BLUE,
    fontWeight: 'bold',
  },
  H2: {
    fontSize: 24,
    color: COLORS.DARK_BLUE,
  },
  H3: {
    fontSize: 16,
    color: COLORS.DARK_BLUE,
    fontWeight: 'bold',
  },
  P: {
    fontSize: 13,
    color: '#000',
    opacity: 0.5,
  },
  F13: {
    fontSize: 13,
    color: COLORS.DARK_BLUE,
  },
  F15: {
    fontSize: 15,
    color: COLORS.DARK_BLUE,
  },
  F16: {
    fontSize: 16,
    color: '#000',
  },
  FONT_INPUT: {
    fontSize: 13,
    color: COLORS.DARK_BLUE,
  },
  FONT_SONGTITLE: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  INPUT_TEXT: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderColor: COLORS.BORDER,
    fontSize: 12,
    color: COLORS.DARK_BLUE,
  },
  SONG_CARD: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 16,
    padding: 10,
    shadowColor: '#696969',
    shadowRadius: 20,
    shadowOpacity: 0.1,
    shadowOffset: { height: 0, width: 0 },
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
  },
  SONG_CARD_IMAGE: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  MATCHING_CARD: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 24,
    alignItems: 'center',
    gap: 20,
    paddingTop: 20,
    shadowColor: '#b9b9b9',
    shadowRadius: 20,
    shadowOpacity: 0.4,
    shadowOffset: { height: 20, width: 0 },
    elevation: 10,
  },
}
