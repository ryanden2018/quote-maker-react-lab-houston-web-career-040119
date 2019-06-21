import uuid from 'uuid';

export default (state = [], action) => {
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state.map( quote => {return {...quote}}),
               {...action.quote}]
    case "REMOVE_QUOTE":
      var filteredState = state.filter( quote => quote.id !== action.quoteId );
      return [...filteredState.map( quote => {return {...quote}})]
    case "UPVOTE_QUOTE":
      var filteredState = state.filter( quote => quote.id !== action.quoteId );
      var origQuote = state.find( quote => quote.id === action.quoteId);
      return [...filteredState.map( quote => {return {...quote}}),
              {...origQuote, votes: origQuote.votes+1}]
    case "DOWNVOTE_QUOTE":
      var filteredState = state.filter( quote => quote.id !== action.quoteId );
      var origQuote = state.find( quote => quote.id === action.quoteId);
      return [...filteredState.map( quote => {return {...quote}}),
              {...origQuote, votes: Math.max(origQuote.votes-1,0)}]
    default:
      return state;
  }
}
