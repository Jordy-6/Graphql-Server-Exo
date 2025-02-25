import { RESTDataSource } from '@apollo/datasource-rest'
import { AuthorModel, TrackModel } from '../models';

class TrackAPI extends RESTDataSource {
    
    baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';

    getTracks() {
        return this.get<TrackModel[]>('tracks');
    }

    getAuthorById(id: string) {
        return this.get<AuthorModel>(`authors/${id}`);
    }

    incrementTrackViews(trackId: string) {
      return this.patch<TrackModel>(`track/${trackId}/numberOfViews`)
    }

    incrementNumberOfLikes(trackId: string) {
      return this.patch<TrackModel>(`track/${trackId}/numberOfLikes`)
    }
}

export default TrackAPI;
