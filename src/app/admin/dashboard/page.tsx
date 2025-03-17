'use client'

import { useState } from "react";
import { PlusCircle, Edit2, Trash2, Image, Film } from "lucide-react";

interface HighlightItem {
  id: number;
  title: string;
  url: string;
  type: "image" | "video";
}

export default function AdminDashboard() {
  const [highlightItems, setHighlightItems] = useState<HighlightItem[]>([
    { id: 1, title: "Sample Image", url: "https://picsum.photos/200", type: "image" },
    { id: 2, title: "Sample Video", url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4", type: "video" },
  ]);
  const [newItem, setNewItem] = useState<HighlightItem>({ id: 0, title: "", url: "", type: "image" });
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddOrUpdate = () => {
    if (!newItem.title || !newItem.url) return;
    
    if (newItem.id === 0) {
      // Add new item
      setHighlightItems([...highlightItems, { ...newItem, id: Date.now() }]);
    } else {
      // Update existing item
      setHighlightItems(highlightItems.map(item => item.id === newItem.id ? newItem : item));
    }
    setNewItem({ id: 0, title: "", url: "", type: "image" });
    setIsFormOpen(false);
  };

  const handleEdit = (item: HighlightItem) => {
    setNewItem(item);
    setIsFormOpen(true);
  };

  const handleDelete = (id: number) => {
    setHighlightItems(highlightItems.filter(item => item.id !== id));
  };

  const resetForm = () => {
    setNewItem({ id: 0, title: "", url: "", type: "image" });
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Content Highlights</h1>
          <button
            onClick={() => setIsFormOpen(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            <PlusCircle className="w-4 h-4 mr-2" />
            Add New
          </button>
        </div>

        {isFormOpen && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {newItem.id === 0 ? "Add New Highlight" : "Edit Highlight"}
              </h2>
              <button 
                onClick={resetForm}
                className="text-gray-400 hover:text-gray-600"
              >
                Cancel
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  placeholder="Enter title"
                  value={newItem.title}
                  onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL</label>
                <input
                  type="text"
                  placeholder="https://..."
                  value={newItem.url}
                  onChange={(e) => setNewItem({ ...newItem, url: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setNewItem({ ...newItem, type: "image" })}
                    className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg border ${
                      newItem.type === "image" 
                        ? "bg-blue-50 border-blue-500 text-blue-700" 
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Image className="w-4 h-4 mr-2" />
                    Image
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewItem({ ...newItem, type: "video" })}
                    className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg border ${
                      newItem.type === "video" 
                        ? "bg-blue-50 border-blue-500 text-blue-700" 
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Film className="w-4 h-4 mr-2" />
                    Video
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleAddOrUpdate}
                disabled={!newItem.title || !newItem.url}
                className={`w-full mt-2 py-3 rounded-lg font-medium ${
                  !newItem.title || !newItem.url
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {newItem.id === 0 ? "Add Highlight" : "Update Highlight"}
              </button>
            </div>
          </div>
        )}

        {highlightItems.length > 0 ? (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-medium text-gray-800">Current Highlights</h2>
            </div>
            <ul className="divide-y divide-gray-100">
              {highlightItems.map(item => (
                <li key={item.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center">
                    {item.type === "image" ? (
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-500 rounded-lg mr-4">
                        <Image className="w-5 h-5" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-500 rounded-lg mr-4">
                        <Film className="w-5 h-5" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-medium text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-500 truncate max-w-md">{item.url}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-500">No highlights available. Add your first one!</p>
          </div>
        )}
      </div>
    </div>
  );
}