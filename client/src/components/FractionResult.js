import React from 'react';
import { ListResult, List } from '../style/components/FractionResult';

class FractionResult extends React.PureComponent {
  render() {
    const { fractions } = this.props;

    const renderFraction = fractions.map((fraction, key) => {
        return (
            <List key={key}>
                <p>
                    <span>{fraction.count}x </span>
                    <span>Rp{fraction.value}</span>
                </p>
            </List>
        )
    });

    return (
        <ListResult>
            {renderFraction}
        </ListResult>
    )
  }
}

export default FractionResult;
