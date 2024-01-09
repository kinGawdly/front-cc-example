// src/reducers/carouselReducer.ts
import { createReducer } from '@reduxjs/toolkit';
import { fetchCarouselData } from '../actions/carouselActions';

interface CarouselState {
  carouselData: any[]; // TODO: any por la interfaz
}

const initialState: CarouselState = {
  carouselData: [],
};

const carouselReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchCarouselData, (state, action) => {
    state.carouselData = action.payload;
  });
});

export default carouselReducer;
