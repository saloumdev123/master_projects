// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Resource } from '../interfaces/resource';
// import { Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ResourceService {


//    private baseUrl = 'http://localhost:8081/api/resources';

//   constructor(private http: HttpClient) {}

//  getAllResources(): Observable<Resource[]> {
//     const resources: Resource[] = [
//       {
//         id: 1,
//         title: 'Clean Code',
//         author: 'Robert C. Martin',
//         category: 'Développement',
//         resourceContent: 'Un excellent livre sur la propreté du code.',
//         image: 'assets/cleancode.jpeg',
//         authorRole: '',
//         downloadUrl: 'https://monserveur.com/files/livre1.pdf'
//       },
//       {
//         id: 2,
//         title: 'Designing Data-Intensive Applications',
//         resourceContent: 'Base de données et systèmes distribués.',
//         downloadUrl: 'https://monserveur.com/files/livre1.pdf'
//       },
//         {
//           title: 'Pro Git',
//           author: 'Scott Chacon & Ben Straub',
//           authorRole: 'Authors',
//           category: 'Version Control',
//           image: "assets/net.jpeg",
//           resourceContent: 'A comprehensive guide to Git version control with clear explanations and use cases.',
//           downloadUrl: 'https://monserveur.com/files/livre1.pdf'
//         }

//       // Ajoute d’autres ressources ici si besoin
//     ];
//     return of(resources);
//   }

//   getResourceById(id: number): Observable<Resource> {
//     return this.http.get<Resource>(`${this.baseUrl}/${id}`);
//   }

//   createResource(resource: Resource): Observable<Resource> {
//     return this.http.post<Resource>(this.baseUrl, resource);
//   }

//   searchBooks(query: string): Observable<Resource[]> {
//     return this.http.get<Resource[]>(`${this.baseUrl}/search?q=${query}`);
//   }

//   saveExternalResource(resource: Resource): Observable<Resource> {
//     return this.http.post<Resource>(`${this.baseUrl}/save`, resource);
//   }
// }
