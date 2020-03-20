import { createLocalVue, shallowMount} from '@vue/test-utils';
import Vuex from 'vuex';
import merge from 'lodash/merge';  
import defaultStoreConfig from '../../src/store/index';
import PlayerInput from '../../src/components/PlayerInput';
import { winnerData, loserData } from './PlayerData';

const localVue = createLocalVue();
localVue.use(Vuex);

function createStore(overrides) {                                              
    const config = {};                                                           
    const storeOptions = {
        mutations: {                                                                  
          setCharArray: jest.fn()
        },                                                                       
    };                                                                           
    merge(config, defaultStoreConfig, storeOptions, overrides);                  
    return new Vuex.Store(config);                                               
  }                                                                     
function createWrapper(overrides) {                                            
    const defaultMountingOptions = {                                             
      mocks: {                                                                   
        mutations: {                                                                  
          setCharArray: jest.fn()
        },                                                                       
      },                                                                         
      localVue,                                                                  
    };
    return shallowMount( PlayerInput , merge(defaultMountingOptions, overrides))  
  }                                   

it('shows revanche button when winner', () => {
    const store = createStore(winnerData);
    const wrapper = createWrapper({
      store,
    });
    let button = wrapper.find('.button')
    expect(button.text()).toBe('Revanche!');
  });

it('shows give up button when loser', () => {
    const store = createStore(loserData);
    const wrapper = createWrapper({
      store,
    });
    let button = wrapper.find('.button')
    expect(button.text()).toBe('Give up');
  });
