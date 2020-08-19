import React from 'react';
import {connect} from 'react-redux'

import {Style} from './styles'

const Price = ({glasses}) => {
  return (
    <Style>
      <p className="price">R$ {glasses.value}</p>
    </Style>
  );
};

const mapStateToProps = state => ({glasses: state.glasses})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Price)
