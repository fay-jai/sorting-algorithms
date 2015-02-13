module Sort_Algorithms
  # Example arrays
  # @empty   = []
  # @one     = [1]
  # @inorder = [-5, -1, 0, 4, 9]
  # @reverse = [10, 8, 5, 3, -1, -7]
  # @random  = [-1, 6, 10, 2, -6, -1, 0, -3, 8, 9, 6, 10]

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
    array
  end

  # bubble sort
  def self.bubble_sort(array)
    len = array.length
    for i in 0...len
      has_swapped = false
      for j in 0...(len - i - 1)
        swap(array, j, j + 1) if array[j] > array[j + 1]
        has_swapped = true
      end
      break if not has_swapped
    end
    array
  end

  # insertion sort
  def self.insertion_sort(array)
    len = array.length
    for i in 0...len
      hole = array[i]
      j = i
      while j > 0 && array[j - 1] > hole
        array[j] = array[j - 1]
        j -= 1
      end
      array[j] = hole
    end
    array
  end

  # merge sort
  def self.merge_sort(array)
    len = array.length
    return array if len < 2

    mid   = (len / 2).floor
    left  = merge_sort( array[0...mid]   )
    right = merge_sort( array[mid...len] )

    merge array, left, right
  end

  def self.merge(array, left, right)
    left_len  = left.length
    right_len = right.length
    i = 0 # array
    j = 0 # left
    k = 0 # right

    while j < left_len && k < right_len
      if left[j] <= right[k]
        array[i] = left[j]
        j += 1
      else
        array[i] = right[k]
        k += 1
      end
      i += 1
    end

    while j < left_len
      array[i] = left[j]
      i += 1
      j += 1
    end

    while k < right_len
      array[i] = right[k]
      i += 1
      k += 1
    end

    array
  end

  # quick sort
  def self.quick_sort(array)
    len = array.length
    return array if len < 2

    pivot = array.take 1
    left  = []
    right = []

    for i in 1...len
      (array[i] <= pivot[0] ? left : right).push array[i]
    end

    left  = quick_sort left
    right = quick_sort right

    left + pivot + right
  end

  def self.swap(array, i, j)
    temp     = array[i]
    array[i] = array[j]
    array[j] = temp
  end
end