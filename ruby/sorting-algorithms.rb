module Sort_Algorithms
  # selection sort
  def self.selection_sort(array)
    len = array.length

    for i in 0...len
      min_idx = i

      for j in (i + 1)...len
        min_idx = j if array[min_idx] > array[j]
      end

      swap(array, min_idx, i)
    end

    return array
  end

  # bubble sort
  def self.bubble_sort(array)

  end

  # insertion sort
  def self.insertion_sort(array)

  end

  # merge sort
  def self.merge_sort(array)

  end

  # quick sort
  def self.quick_sort(array)

  end

  def self.swap(array, i, j)
    temp     = array[i]
    array[i] = array[j]
    array[j] = temp
  end
end