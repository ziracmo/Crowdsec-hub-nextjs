import React from 'react';

type State = {};
type Props = {
  name: string;
};

export default class Card extends React.Component<Props, State> {
  render() {
    const { name } = this.props;
    return (
      <span className="py-1 px-3 text-center border-primary text-sm text-primary rounded-full">
        {name}
      </span>
    );
  }
}
