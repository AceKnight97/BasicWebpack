import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import { } from 'antd';
import { useMergeState } from '../../../../Helpers/customHooks';
import InforBlock from '../InforBlock';
import HomeTotal from '../HomeTotal';

const HomeBody = (props) => {
  const [state, setState] = useMergeState({
    name: '',
    phone: '',
    address: '',
    notes: '',
    total: 0,



  });
  const { className } = props;
  const onChange = (key, value) => {
    setState({ [key]: value });
  }

  const { name, phone, address, notes, total } = state;

  const renderToper = () => (
    <div className="home-body-toper">
      <InforBlock
        name1='name'
        value1={name}
        title1='Name:'
        name2='phone'
        value2={phone}
        title2='Phone number:'
        onChange={onChange}
      />
      <InforBlock
        name1='address'
        value1={address}
        title1='Address:'
        name2='notes'
        value2={notes}
        title2='Notes:'
        onChange={onChange}
      />
      <HomeTotal />
    </div>
  )

  return (
    <div className={classnames('home-body', className)}>
      {renderToper()}


    </div>
  );
};
HomeBody.defaultProps = {
  className: '',
};
HomeBody.propTypes = {
  className: PropTypes.string,
};

export default HomeBody;