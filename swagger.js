const annotation={
     "openapi": "3.0.0",
     "info": {
          "title": "Library",
          "version": "1.0.0",
          "description": "An example API that uses JWT for authentication and authorization"
     },
     "paths": {
          "/api/register": {
               "post": {
                    "tags": [
                         "Users"
                    ],
                    "summary": "Create a new user",
                    "description": "Create a new user with the given email and password.",
                    "produces": [
                         "application/json"
                    ],
                    "requestBody": {
                         "description": "User object that needs to be added to the system",
                         "required": true,
                         "content": {
                              "application/json": {
                                   "schema": {
                                        "$ref": "#/components/schemas/UserInput"
                                   }
                              }
                         }
                    },
                    "responses": {
                         "201": {
                              "description": "User created successfully",
                              "content": {
                                   "application/json": {
                                        "schema": {
                                             "type": "object",
                                             "properties": {
                                                  "message": {
                                                       "type": "string"
                                                  }
                                             }
                                        }
                                   }
                              }
                         },
                         "400": {
                              "description": "Bad Request",
                              "content": {
                                   "application/json": {
                                        "schema": {
                                             "type": "object",
                                             "properties": {
                                                  "message": {
                                                       "type": "string"
                                                  }
                                             }
                                        }
                                   }
                              }
                         },
                         "409": {
                              "description": "Conflict",
                              "content": {
                                   "application/json": {
                                        "schema": {
                                             "type": "object",
                                             "properties": {
                                                  "message": {
                                                       "type": "string"
                                                  }
                                             }
                                        }
                                   }
                              }
                         },
                         "500": {
                              "description": "Internal Server Error",
                              "content": {
                                   "application/json": {
                                        "schema": {
                                             "type": "object",
                                             "properties": {
                                                  "message": {
                                                       "type": "string"
                                                  }
                                             }
                                        }
                                   }
                              }
                         }
                    }
               }
          },
          "/api/login": {
               "post": {
                    "tags": [ "Users"],
                    "summary": "Login to get a JWT token",
                    "requestBody": {
                         "required": true,
                         "content": {
                              "application/json": {
                                   "schema": {
                                        "type": "object",
                                        "properties": {
                                             "email": {
                                                  "type": "string"
                                             },
                                             "password": {
                                                  "type": "string"
                                             }
                                        }
                                   }
                              }
                         }
                    },
                    "responses": {
                         "200": {
                              "description": "Successful login",
                              "content": {
                                   "application/json": {
                                        "schema": {
                                             "type": "object",
                                             "properties": {
                                                  "token": {
                                                       "type": "string"
                                                  }
                                             }
                                        }
                                   }
                              }
                         },
                         "401": {
                              "description": "Invalid username or password",
                              "content": {
                                   "application/json": {
                                        "schema": {
                                             "type": "object",
                                             "properties": {
                                                  "error": {
                                                       "type": "string"
                                                  }
                                             }
                                        }
                                   }
                              }
                         }
                    }
               }
          },
          "/api/books": {
            "get": {
               "tags": [
                    "BOOKS"
               ],
               "summary": "Get all books",
                    "security": [
                         {
                              "bearerAuth": []
                         }
                    ],
               "responses": {
                    "200": {
                         "description": "List of books",
                         "content": {
                              "application/json": {
                                   "schema": {
                                        "$ref": "#/components/schemas/Book"
                                   }
                              }
                         }
                    }
               }
          },
          "post": {
               "tags": [
                    "BOOKS"
               ],
               "summary": "Add a new book",
               "security": [
                    {
                         "bearerAuth": []
                    }
               ],
               "requestBody": {
                    "description": "Book object that needs to be added to the library",
                    "required": true,
                    "content": {
                         "application/json": {
                              "schema": {
                                   "$ref": "#/components/schemas/BookInput"
                              }
                         }
                    }
               },
               "responses": {
                    "200": {
                         "description": "Book added successfully",
                         "content": {
                              "application/json": {
                                   "schema": {
                                        "$ref": "#/components/schemas/Book"
                                   }
                              }
                         }
                    },
                    "500": {
                         "description": "Internal server error"
                    }
               }
          },
          
     },
    "/api/books/{id}": {
     "get": {
          "tags": [
               "BOOKS"
          ],
          "summary": "Get a book by ID",
              "security": [
                   {
                        "bearerAuth": []
                   }
              ],
          "parameters": [
               {
                    "name": "id",
                    "in": "path",
                    "description": "ID of the book to retrieve",
                    "required": true,
                    "schema": {
                         "type": "string"
                    }
               }
          ],
          "responses": {
               "200": {
                    "description": "Book details",
                    "content": {
                         "application/json": {
                              "schema": {
                                   "$ref": "#/components/schemas/Book"
                              }
                         }
                    }
               },
               "404": {
                    "description": "Book not found"
               }
          }
     },
     "put": {
          "tags": [
               "BOOKS"
          ],
          "summary": "Update a book by ID",
          "security": [
               {
                    "bearerAuth": []
               }
          ],
          "parameters": [
               {
                    "name": "id",
                    "in": "path",
                    "description": "ID of the book to update",
                    "required": true,
                    "schema": {
                         "type": "string"
                    }
               }
          ],
          "requestBody": {
               "description": "Book object that needs to be updated",
               "required": true,
               "content": {
                    "application/json": {
                         "schema": {
                              "$ref": "#/components/schemas/BookInput"
                         }
                    }
               }
          },
          "responses": {
               "200": {
                    "description": "Book updated successfully",
                    "content": {
                         "application/json": {
                              "schema": {
                                   "$ref": "#/components/schemas/Book"
                              }
                         }
                    }
               },
               "404": {
                    "description": "Book not found"
               },
               "500": {
                    "description": "Internal server error"
               }
          }
     },
         "delete": {
              "tags": [
                   "BOOKS"
              ],
              "summary": "Delete a book by ID",
              "security": [
                   {
                        "bearerAuth": []
                   }
              ],
              "parameters": [
                   {
                        "name": "id",
                        "in": "path",
                        "description": "ID of the book to delete",
                        "required": true,
                        "schema": {
                             "type": "string"
                        }
                   }
              ],
              "responses": {
                   "200": {
                        "description": "Book deleted successfully"
                   },
                   "404": {
                        "description": "Book not found"
                   },
                   "500": {
                        "description": "Internal server error"
                   }
              }
         } 
    
  },
  "/api/home":{
     "get": {
          "summary": "Access the protected API",
          "security": [
               {
                    "bearerAuth": []
               }
          ],
          "responses": {
               "200": {
                    "description": "Success",
                    "content": {
                         "application/json": {
                              "schema": {
                                   "type": "object",
                                   "properties": {
                                        "message": {
                                             "type": "string"
                                        }
                                   }
                              }
                         }
                    }
               },
               "401": {
                    "description": "Access denied: missing token",
                    "content": {
                         "application/json": {
                              "schema": {
                                   "type": "object",
                                   "properties": {
                                        "error": {
                                             "type": "string"
                                        }
                                   }
                              }
                         }
                    }
               },
               "403": {
                    "description": "Access denied: invalid token",
                    "content": {
                         "application/json": {
                              "schema": {
                                   "type": "object",
                                   "properties": {
                                        "error": {
                                             "type": "string"
                                        }
                                   }
                              }
                         }
                    }
               }
          }
     }
  }
},
     "components": {
          "securitySchemes": {
               "bearerAuth": {
                    "type": "http",
                    "scheme": "bearer",
                    "bearerFormat": "JWT"
               }
          },
          "schemas": {
               "Book": {
                    "type": "object",
                    "properties": {
                         "_id": {
                              "type": "string",
                              "example": "60ecb6aaeae6e045bb6f9e6c"
                         },
                         "title": {
                              "type": "string",
                              "example": "The Great Gatsby"
                         },
                         "author": {
                              "type": "string",
                              "example": "F. Scott Fitzgerald"
                         },
                         "description": {
                              "type": "string",
                              "example": "A novel about the decadence of the Jazz Age"
                         }
                    }
               },
               "User": {
                    "type": "object",
                    "properties": {
                         "_id": {
                              "type": "string",
                              "example": "60ecb6aaeae6e045bb6f9e6c"
                         },
                         "name": {
                              "type": "string",
                              "example": "John Doe"
                         },
                         "email": {
                              "type": "string",
                              "example": "johndoe@example.com"
                         },
                         "password": {
                              "type": "string",
                              "example": "password123"
                         }
                    }
               },
               "BookInput": {
                    "type": "object",
                    "properties": {
                         "title": {
                              "type": "string",
                              "example": "The Great Gatsby"
                         },
                         "author": {
                              "type": "string",
                              "example": "F. Scott Fitzgerald"
                         },
                         "description": {
                              "type": "string",
                              "example": "A novel about the decadence of the Jazz Age"
                         }
                    }
               },
               "UserInput": {
                    "type": "object",
                    "properties": {
                         "name": {
                              "type": "string",
                              "example": "John Doe"
                         },
                         "email": {
                              "type": "string",
                              "example": "johndoe@example.com"
                         },
                         "password": {
                              "type": "string",
                              "example": "password123"
                         }
                    }
               }
          }
     }
}

module.exports =annotation