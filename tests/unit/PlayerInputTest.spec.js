import { createLocalVue, shallowMount} from '@vue/test-utils';
import Vuex from 'vuex';
import merge from 'lodash/merge';  
import defaultStoreConfig from '../../src/store/index';
import PlayerInput from '../../src/components/PlayerInput';
import { winnerData, loserData } from './PlayerData';
//import flushPromises from 'flush-promises';

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
     //   $route: {                                                                
     //     path: '/checkout/cart/',                                               
     //   },                                                                       
        mutations: {                                                                  
          setCharArray: jest.fn()
     //     //  updateCart: jest.fn(() => Promise.resolve()),                      
        },                                                                       
      },                                                                         
      localVue,                                                                  
     // stubs: ['no-ssr'],                                                      
     // stubs: {                                                                   
     //   NuxtLink: RouterLinkStub,                                                
      };                                                                         
    return shallowMount( PlayerInput , merge(defaultMountingOptions, overrides))  
  }                                   

it('shows winner message', () => {
    const store = createStore(winnerData);
    const wrapper = createWrapper({
      store,
      // mocks,
    });
  });

it('shows loser message', () => {
    const store = createStore(loserData);
    const wrapper = createWrapper({
      store,
      // mocks,
    });
  });
