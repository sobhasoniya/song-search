import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.component.html',
  styleUrls: ['./song-search.component.css']
})
export class SongSearchComponent {
  searchQuery: string="";
  songs: string[] = [];

  constructor(private http: HttpClient) {}

  search(): void {
    const apiUrl = ''; // Replace with your API endpoint
    const query = this.searchQuery;

    // Make API request
    this.http.get(`${apiUrl}?query=${query}`).subscribe((response: any) => {
      this.songs = response.results; // Assuming the API returns an array of song names in the "results" field
    });
  }
}
