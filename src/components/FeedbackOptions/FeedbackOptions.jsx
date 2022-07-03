import { CommentOption } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map(option => (
      <CommentOption key={option}>
        <button type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      </CommentOption>
    ))}
  </ul>
);
