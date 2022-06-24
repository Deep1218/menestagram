import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { faXmark, faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  faSearch = faSearch;
  faXmark = faXmark;

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onClose() {
    this.searchForm.reset();
  }
  onSubmit() {
    console.log(this.searchForm.value);
  }
}
