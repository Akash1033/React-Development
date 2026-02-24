import config from "../conf/config";
import { Client, ID, Databases, Storage, Query, Permission, Role  } from "appwrite";

export class Service {
  client = new Client();
  Databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
        [
          Permission.read(Role.any()), // public read (optional)
          Permission.update(Role.user(userId)), // only owner can update
          Permission.delete(Role.user(userId)), // only owner can delete
        ],
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.updateDocument(
  config.appwriteDatabaseId,
  config.appwriteCollectionId,
  slug,
  {
    title,
    content,
    featuredImage,
    status,
    userId
  },
  [
    Permission.read(Role.any()),
    Permission.update(Role.user(userId)),
    Permission.delete(Role.user(userId)),
  ]
);
    
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
      );
      return true;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
      );
    } catch (error) {
      console.log("Appwrite service failed", error);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries,
      );
    } catch (error) {
      throw error;
    }
  }
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file,
      );
    } catch (error) {
      throw error;
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

 getFilePreview(fileId) {
  if (!fileId) return null;
  return this.bucket.getFilePreview(config.appwriteBucketId, fileId);
}
}

const service = new Service();
export default service;
