import React from 'react';
import {expect} from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import OkButton from '../app/components/OkButton';

describe('<OkButton />', () => {
    var wrapper = null;

    beforeEach(function() {
        wrapper = shallow(<OkButton />);
    });

    it('has an onclick', () => {
        const onClick = sinon.spy();
        wrapper.simulate('click');
        expect(onClick).to.have.property('callCount', 0);
    })
});
