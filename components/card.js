import Heading from './heading';
import Icon from './icon';

export default function Card({ heading }) {
  return (
    <div className="relative bg-white pb-full w-full shadow rounded">
      <div className="absolute w-full flex items-center justify-center">
        <div>
          <Heading>{heading}</Heading>
          <Icon />
        </div>
      </div>
    </div>
  );
}
