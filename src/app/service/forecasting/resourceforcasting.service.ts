import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResourceforcastingService {
  baseUrl = 'https://pokeapi.co/api/v2';
  imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  constructor(private http: HttpClient) { }
  deals = [
    {
    key : 954451,
    value : '954451 Fedex'
    },
    {
      key : 954452,
      value : '954452 Health Care'
    }
    ,
    {
      key : 954455,
      value : '954455 Health Care'
    }
    ,
    {
      key : 954453,
      value : '954453 Health Care'
    }
    ,
    {
      key : 954451,
      value : '954451 Fedex'
      },
      {
        key : 954452,
        value : '954452 Health Care'
      }
      ,
      {
        key : 954455,
        value : '954455 Health Care'
      }
      ,
      {
        key : 954453,
        value : '954453 Health Care'
      }
      ,
      {
        key : 954451,
        value : '954451 Fedex'
        },
        {
          key : 954452,
          value : '954452 Health Care'
        }
        ,
        {
          key : 954455,
          value : '954455 Health Care'
        }
        ,
        {
          key : 954453,
          value : '954453 Health Care'
        },
        {
          key : 954451,
          value : '954451 Fedex'
          },
          {
            key : 954452,
            value : '954452 Health Care'
          }
          ,
          {
            key : 954455,
            value : '954455 Health Care'
          }
          ,
          {
            key : 954453,
            value : '954453 Health Care'
          }
          ,
          {
            key : 954451,
            value : '954451 Fedex'
            },
            {
              key : 954452,
              value : '954452 Health Care'
            }
            ,
            {
              key : 954455,
              value : '954455 Health Care'
            }
            ,
            {
              key : 954453,
              value : '954453 Health Care'
            }
            ,
            {
              key : 954451,
              value : '954451 Fedex'
              },
              {
                key : 954452,
                value : '954452 Health Care'
              }
              ,
              {
                key : 954455,
                value : '954455 Health Care'
              }
              ,
              {
                key : 954453,
                value : '954453 Health Care'
              }
              ,
              {
                key : 954451,
                value : '954451 Fedex'
                },
                {
                  key : 954452,
                  value : '954452 Health Care'
                }
                ,
                {
                  key : 954455,
                  value : '954455 Health Care'
                }
                ,
                {
                  key : 954453,
                  value : '954453 Health Care'
                }
                ,
                {
                  key : 954451,
                  value : '954451 Fedex'
                  },
                  {
                    key : 954452,
                    value : '954452 Health Care'
                  }
                  ,
                  {
                    key : 954455,
                    value : '954455 Health Care'
                  }
                  ,
                  {
                    key : 954453,
                    value : '954453 Health Care'
                  }
                  ,
                  {
                    key : 954451,
                    value : '954451 Fedex'
                    },
                    {
                      key : 954452,
                      value : '954452 Health Care'
                    }
                    ,
                    {
                      key : 954455,
                      value : '954455 Health Care'
                    }
                    ,
                    {
                      key : 954453,
                      value : '954453 Health Care'
                    },
                    {
                      key : 954451,
                      value : '954451 Fedex'
                      },
                      {
                        key : 954452,
                        value : '954452 Health Care'
                      }
                      ,
                      {
                        key : 954455,
                        value : '954455 Health Care'
                      }
                      ,
                      {
                        key : 954453,
                        value : '954453 Health Care'
                      }
                      ,
                      {
                        key : 954451,
                        value : '954451 Fedex'
                        },
                        {
                          key : 954452,
                          value : '954452 Health Care'
                        }
                        ,
                        {
                          key : 954455,
                          value : '954455 Health Care'
                        }
                        ,
                        {
                          key : 954453,
                          value : '954453 Health Care'
                        }
                        ,
                        {
                          key : 954451,
                          value : '954451 Fedex'
                          },
                          {
                            key : 954452,
                            value : '954452 Health Care'
                          }
                          ,
                          {
                            key : 954455,
                            value : '954455 Health Care'
                          }
                          ,
                          {
                            key : 954453,
                            value : '954453 Health Care'
                          },
                          {
                          key : 954454,
                          value : '954454 LAST Health Care'
                        }
  ];
  limit = 25;
  getPokemon(offset = 0) {
    return this.http.get(`${this.baseUrl}/pokemon?offset=${offset}&limit=10`).pipe(
      map(result => {
        return result[`results`];
      }),
      map(pokemons => {
        return pokemons.map((poke, index) => {
          poke.image = this.getPokeImage(index + offset + 1);
          poke.pokeIndex = offset + index + 1;
          return poke;
        });
      })
    );
  }

  getPokeImage(index) {
    return `${this.imageUrl}${index}.png`;
  }

  findPokemon(search) {
    return this.http.get(`${this.baseUrl}/pokemon/${search}`).pipe(
      map(pokemon => {
        pokemon[`image`] = this.getPokeImage(pokemon[`id`]);
        pokemon[`pokeIndex`] = pokemon[`id`];
        return pokemon;
      })
    );
  }
  getPokeDetails(index) {
    return this.http.get(`${this.baseUrl}/pokemon/${index}`).pipe(
      map(poke => {
        let sprites: string[];
        sprites =  Object.keys(poke[`sprites`]);
        poke[`images`] = sprites
        .map(spritKey => poke[`sprites`][spritKey]).filter(img => img);
        return poke;
      })
    );
  }
  getDeals(page: number = 1, size: number = 15): any[] {
    return this.deals.slice((page - 1) * size, ((page - 1) * size) + size);
  }
  getDealsAsync(page: number = 1, size: number = 15): Observable<any[]> {
    return new Observable<any[]>(observer => {
      observer.next(this.getDeals(page, size));
      observer.complete();
    }).pipe(delay(2000));
  }
}
