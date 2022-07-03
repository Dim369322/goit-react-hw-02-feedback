import { StatisticsElement } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul>
    <StatisticsElement>Good: {good}</StatisticsElement>
    <StatisticsElement>Neutral: {neutral}</StatisticsElement>
    <StatisticsElement>Bad: {bad}</StatisticsElement>
    <StatisticsElement>Total: {total}</StatisticsElement>
    <StatisticsElement>
      Positive feedback:
      {positivePercentage}%
    </StatisticsElement>
  </ul>
);
