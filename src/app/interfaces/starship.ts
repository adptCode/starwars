export interface Starship  {
  count:    number;
  next:     string | null;
  previous: string | null;
  results:  result[];
}

export interface result {
  name:                   string;
  model:                  string;
  manufacturer:           string;
  cost_in_credits:        string;
  length:                 string;
  max_atmosphering_speed: string;
  crew:                   string;
  passengers:             string;
  cargo_capacity:         string;
  consumables:            string;
  hyperdrive_rating:      string;
  MGLT:                   string;
  starship_class:         string;
  pilots:                 string[];
  films:                  string[];
  created:                Date;
  edited:                 Date;
  url:                    string;
}


